// interface ISetAct<T> { 
//     (data:T):T
// }

// type ISetAct2  = ()=>void

interface IModalProps { 
    active: boolean, 
    setActive: ()=>void
    // setActive: ISetAct<boolean | undefined>
}
const Modal = ({active , setActive}: IModalProps ) => {
    return (
        <>
        {!active ? null : 
        <div className=" w-100vw h-100vh flex fixed bg-black opacity-40 justify-center items-center right-0 top-0">
            <div className=" w-1/4 h-1/4 bg-cyan-400 fixed flex justify-center items-center">
                    <button onClick={()=>{setActive()}} className=" w-14 h-10 text-2xl text-red-400">Click</button>
            </div>
        </div> 
        }
        </>

    );
};

export default Modal;