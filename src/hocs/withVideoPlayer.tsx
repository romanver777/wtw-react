import React, { ReactElement, useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import createApi from "../api";
import { MovieType, VideoType } from "../types/types";

type StateProps = {
  tk: string;
};

type MapProps = {
  tk: string;
};

interface WrapComponentProps {
  film: MovieType;
}

type InjectedProps = {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  isOpen: boolean;
  data: VideoType | null;
};

type HocProps = {
  film: MovieType;
  tk: string;
};

const WithVideoPlayer = <P extends WrapComponentProps>(
  Component: React.ComponentType<P>
): React.FC<P & InjectedProps> => {
  const mapStateToProps = (state: StateProps) => ({
    tk: state.tk,
  });

  const Hoc = (props: HocProps): ReactElement<InjectedProps & HocProps> => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<null | VideoType>(null);
    const mountedRef = useRef(true);

    useEffect(() => {
      return () => {
        mountedRef.current = false;
      };
    });

    const getData = (id: number) => {
      createApi()
        .kp.get(`/v2.1/films/${id}/videos`, {
          headers: {
            "X-API-KEY": props.tk,
          },
        })
        .then((response) => {
          if (!mountedRef.current) return null;
          setData(response.data);
          setIsOpen(true);
        })
        .catch((error) => {
          if (!mountedRef.current) return null;
          console.log(error.toJSON());
        });
    };

    let timer: NodeJS.Timeout;
    const handleMouseEnter = () => {
      timer = setTimeout(() => {
        if (!data) {
          getData(props.film.filmId);
        } else {
          setIsOpen(true);
        }
      }, 1000);
    };
    const handleMouseLeave = () => {
      clearTimeout(timer);
      setIsOpen(false);
    };

    return (
      <Component
        {...props}
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
