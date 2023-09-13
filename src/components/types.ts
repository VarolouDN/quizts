export type QuestionObject={
    correctAnswer: number;
    points: number;
    question: string;
    variants: string[];
}

export type Questions=QuestionObject[]
export type AppState={
    questions:Questions,
    status:string,
    index:number,
    answer:null | number,
    points:number
}

export type Action={type:'data',payload:QuestionObject[]}
    | {type:'dataFailed'}
    | {type:'start'}
    | {type:'answer',payload:number}
     | {type:'nextAnswer'}
    | {type:'finished'}
    |  {type:'restart'}