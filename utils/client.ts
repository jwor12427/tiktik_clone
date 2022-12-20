/** @format */

import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: "e8bz9k9b",
	dataset: "production",
	apiVersion: "2022-12-16",
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
