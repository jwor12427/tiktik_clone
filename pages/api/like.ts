/** @format */

import type { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "uuidv4";
import { client } from "../../utils/client";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	//PUT방식으로 받아옴
	if (req.method === "PUT") {
		const { userId, postId, like } = req.body;

		//좋아요 표시일 때와 아닐때 (like || unlike)
		const data = like
			? await client
					.patch(postId)
					.setIfMissing({ likes: [] })
					.insert("after", "likes[-1]", [
						{
							_key: uuid(),
							_ref: userId,
						},
					])
					.commit()
			: await client
					.patch(postId)
					.unset([`likes[_ref=="${userId}"]`])
					.commit();
		res.status(200).json(data);
	}
}
