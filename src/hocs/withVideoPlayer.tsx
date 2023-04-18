import React, { ComponentType, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import axios, { AxiosError, Canceler } from "axios";

import createApi from "../api";
import { MovieType, VideoDataType } from "../types/types";

type StateProps = {
  tk: string;
};

type WrapComponentProps = {
  film: MovieType;
};

type InjectedProps = {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  isOpen: boolean;
  data: VideoDataType | null;
};

type HocProps = {
  film: MovieType;
  tk: string;
};

type AllProps = ReturnType<typeof mapStateToProps> &
  WrapComponentProps &
  InjectedProps;

const mapStateToProps = (state: StateProps) => ({
  tk: state.tk,
});

const WithVideoPlayer = <T extends AllProps>(
  Component: ComponentType<T>
): ComponentType<Omit<T, keyof InjectedProps | "tk">> => {
  const Hoc = (props: HocProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [data, setData] = useState<null | VideoDataType>(null);
    const isMountedComponent = useRef(true);

    const CancelToken = axios.CancelToken;
    let cancel: Canceler | null;

    const getData = (id: number) => {
      return createApi().kp.get(`/v2.2/films/${id}/videos`, {
        cancelToken: new CancelToken(function executor(c) {
          cancel = c;
        }),
        headers: {
          "X-API-KEY": props.tk,
        },
      });
    };

    useEffect(() => {
      isMountedComponent.current = true;
      if (isHover) {
        if (!data) {
          getData(props.film.filmId)
            .then((response) => {
              setData(response.data);
              setIsOpen(true);
            })
            .catch((error: AxiosError) => {
              if (!axios.isCancel(error)) {
                setData(null);
                setIsOpen(true);
              }
            });
        } else {
          setIsOpen(true);
        }
      }
      return () => {
        isMountedComponent.current = false;
        if (cancel) cancel();
      };
    }, [isHover]);

    let timer: NodeJS.Timeout;
    const handleMouseEnter = () => {
      timer = setTimeout(() => {
        if (isMountedComponent.current) setIsHover(true);
      }, 1500);
    };
    const handleMouseLeave = () => {
      clearTimeout(timer);
      if (cancel) {
        cancel();
        cancel = null;
      }
      setIsHover(false);
      setIsOpen(false);
    };

    return (
      <Component
        {...(props as T)}
        isOpen={isOpen}
        data={data}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    );
  };

  return connect(mapStateToProps)(Hoc);
};

export default WithVideoPlayer;
