export default function SideBar(props){
    const  { handleToggleModal,dat,date } = props
    return (
        <div  className="sidebar">
            <div  onClick={handleToggleModal}
            className="bgOverlay"></div>
            <div className="sidebarContents">

                 <h2>{data?.title}</h2>
                  <div className="descriptionContainer">
                    <P className="descriptionTitle">
                        {data?.date}
                    </P>
                     <p> {data?.explanation}</p>
                  </div>
               <button onClick={handleToggleModal}>
                 <i className="fa-solid fa-circle-right"></i>
               </button>
            </div>
        </div>
    )

}