export type QuestionObject={
    correctAnswer: number;
    points: number;
    question: string;
    variants: string[];
}

export type Questions=QuestionObject[]
export type AppState={
    questions:Questions,
    status:string
}

export type Action={type:'data',payload:QuestionObject[]} | {type:'dataFailed'}