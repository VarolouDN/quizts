export default function Variant(){
    return (
        <div>
            <h2>Here is you question</h2>
            <progress className='progress' max={15} value={1}/>
            <button className='questionBtn answeredBtn correctBtn'>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</button>
            <button className='questionBtn'>Lorem ipsum lorem ipsum lorem ipsum</button>
            <button className='questionBtn'>Lorem ipsum lorem ipsum lorem ipsum</button>
        </div>
    )
}