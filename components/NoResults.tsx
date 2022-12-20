/** @format */

import React from "react";
import { MdOutlineVideocamOff } from "react-icons/md";
import { BiCommentX } from "react-icons/bi";

interface IProps {
	text: string;
}

//이렇게 props를 줄수 있고, VideoCard처럼도 줄수 있음! 방법은 다양하게
const NoResults = ({ text }: IProps) => {
	return (
		<div className="flex flex-col justify-center items-center h-full w-full">
			<p className="text-8xl">
				{text === "첫번째 댓글을 작성해주세요!" ? (
					<BiCommentX />
				) : (
					<MdOutlineVideocamOff />
				)}
			</p>
			<p className="text-center text-xm">{text}</p>
		</div>
	);
};

export default NoResults;
