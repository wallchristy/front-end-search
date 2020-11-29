interface hits {
    created_at: Date;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text: string;
    comment_text: string;
    num_comments: number;
    story_id: string;
    story_title: string;
    story_url: string;
    parent_id: string;
    created_at_i: number;
    relevancy_score: number;
    _tags: string[];
    objectID: string;
    _highlightResult: object;
}

export interface searchResult {
    hits: hits[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    exhaustiveNbHits: boolean;
    query: string;
    params: string;
    processingTimeMS: number;
}