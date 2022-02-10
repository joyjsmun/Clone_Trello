import { useState } from "react";

function CreateCategory() {
    const [newCategory,setCategory] = useState([]);

    return (
        <div>
            <form>
                <input placeholder="Create your own Board" />
                
            </form>
        </div>
    )
}

export default CreateCategory;