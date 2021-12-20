// import React, {useRef,useEffect} from 'react';

// const UseREff = () => {
//     const inputRef  = useRef(null)
//     const btnRef  = useRef(null)
//     useEffect(()=>{
//         inputRef.current.focus()
//         btnRef.current.focus()
//     },[])
//     const handel =()=>{
//         inputRef.current.focus()
//     }
//     return (
//         <div>
//             <h1>use ref here</h1>
//             <input ref={inputRef} type="" />
//             <button onClick={handel} ref={btnRef}>submit</button>
//         </div>
//     );
// };

// export default UseREff;



///////---------------------2nd way

import React, {useRef} from 'react';
export const UseREff = ()=>{
    const more = useRef(null)


    return(
        <div>
            <input ref={more} type="text" name="" id="" />
            <button onClick={()=>{ more.current.focus() }}>focus</button>

        </div>
    )
}
export default UseREff;
