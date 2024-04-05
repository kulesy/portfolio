import "./Lightbox.css";
import ApiConsts from "../consts/ApiConsts";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";

function Lightbox({ imageIds, closeEventCallback }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef(null);
  const imageNavLeftRef = useRef(null);
  const imageNavRightRef = useRef(null);
  const imagePagerRef = useRef(null);

  function navgiateImage(direction) {
    if (direction == "left" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (direction == "right" && activeIndex < imageIds.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        imageRef.current &&
        !imageRef.current.contains(event.target) &&
        imageNavLeftRef.current &&
        !imageNavLeftRef.current.contains(event.target) &&
        imageNavRightRef.current &&
        !imageNavRightRef.current.contains(event.target) &&
        imagePagerRef.current &&
        !imagePagerRef.current.contains(event.target)
      ) {
        closeEventCallback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [imageRef, imageNavLeftRef, imageNavRightRef, imagePagerRef]);

  return (
    <div className="lightbox">
      <div className="lightbox__content">
        <div
          className={
            "lightbox__content__prev" + (activeIndex == 0 ? " disabled" : "")
          }
          onClick={() => navgiateImage("left")}
          ref={imageNavLeftRef}
        >
          <FaChevronLeft></FaChevronLeft>
        </div>
        <div className="lightbox__content__image-container">
          <img
            className="lightbox__content__image-container__image"
            src={`${ApiConsts.ImageDownloadApi}/${imageIds[activeIndex]}`}
            ref={imageRef}
          ></img>
        </div>
        <div
          className={
            "lightbox__content__next" +
            (activeIndex == imageIds.length - 1 ? " disabled" : "")
          }
          onClick={() => navgiateImage("right")}
          ref={imageNavRightRef}
        >
          <FaChevronRight></FaChevronRight>
        </div>
        <div className="lightbox__content__pager" ref={imagePagerRef}>
          {imageIds.map((e, index) => {
            return (
              <div
                key={index}
                className={
                  "lightbox__content__pager__indicator" +
                  (activeIndex == index ? " active" : "")
                }
                onClick={() => setActiveIndex(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
