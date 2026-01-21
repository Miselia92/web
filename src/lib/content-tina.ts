import { client } from "../../tina/__generated__/client";

export async function getProjects() {
    const response = await client.queries.projectsConnection();
    return response.data.projectsConnection.edges?.map((edge) => edge?.node) || [];
}

export async function getProject(relativePath: string) {
    const response = await client.queries.projects({ relativePath });
    return response.data.projects;
}

export async function getWritings() {
    const response = await client.queries.writingConnection();
    return response.data.writingConnection.edges?.map((edge) => edge?.node) || [];
}

export async function getWriting(relativePath: string) {
    const response = await client.queries.writing({ relativePath });
    return response.data.writing;
}

export async function getHome() {
    const response = await client.queries.home({ relativePath: "home.md" });
    return response.data.home;
}

export async function getAbout() {
    const response = await client.queries.about({ relativePath: "about.md" });
    return response.data.about;
}

export async function getConnect() {
    const response = await client.queries.connect({ relativePath: "connect.md" });
    return response.data.connect;
}
