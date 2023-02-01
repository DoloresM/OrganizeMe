const Schedule = ()=>{
    return (
        <>
              <div className="content">
                <h1>Project</h1>
                <form name="schedule" className="scheduleList">
                    <div className="task"><label for="title">Title: </label><input type="text" name="title"/></div>
                    <div className="task"><label for="title">Start Date: </label><input type="date" name="title"/></div>
                    <div className="task"><label for="title">Due Date: </label><input type="date" name="title"/></div>

                    <div  className="task"> 
                        <span>Description</span> 
                        <textarea id="text-box" name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
                    </div>
                    <div  className="task"> 
                        <span>Requirements</span> 
                        <textarea id="text-box" name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
                    </div>


                    <div className="task"><label for="title">Location: </label><input type="textarea" name="title"/></div>
                    
                    <div className="tasks"><button>Add Task</button></div>
                    <div className="tasks"><button>View List</button></div>
                    <div className="tasks"><button>Add Alert</button></div> 
                </form>
            </div>
        </>
    )
}

export default  Schedule;


