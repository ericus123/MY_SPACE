
export type Blog = {
    id: string
    attributes: {
        title: String
        image: {
            data: {
                id: string
                attributes: {
                    name: string
                    caption: string
                    url: string
                }
            }
        }
        slug: String
        content: String
        tags: JSON
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}