/** @format */

import type { NextPage } from "next";
import axios from "axios";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import { BASE_URL } from "../utils";

interface IProps {
	videos: Video[];
}

const Home = ({ videos }: IProps) => {
	//데이터 확인
	//console.log(videos);
	return (
		<div className="flex flex-col gap-10 videos h-full">
			{videos.length ? (
				videos.map((video: Video) => (
					<VideoCard
						post={video}
						key={video._id}
					/>
				))
			) : (
				<NoResults text={"No Videos"} />
			)}
		</div>
	);
};

//서버측 렌더링 함수
export const getServerSideProps = async ({
	query: { topic },
}: {
	query: { topic: string };
}) => {
	let response = null;
	if (topic) {
		response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
	} else {
		response = await axios.get(`${BASE_URL}/api/post`);
	}

	//터미널에 Response Success 올라오는거 확인하면 재대로 서버랑 연결
	//console.log(response.data.name);

	return {
		props: {
			videos: response.data,
		},
	};
};

export default Home;
