import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('Dave')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }

      const handleClick = () => {
        //console.log will print 1 only even after incrementing 2 times
        //because count value is intitially brought in the function and 
        //stays the same within the function. So setCount even after calling
        //for 2 times in other languages should result in 2 outside the function
        //but here it would
        //result into 1 only. (0 + 1) and again (0 + 1). Count stays 0 within the
        //function
        setCount(count + 1)
        setCount(count + 1)
        console.log(count)
      }

      const handleClick3 = (e) => {
        console.log(e.target.innerText)
      }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleClick}> Click it </button>
        <button onClick={handleNameChange}> Change Name </button>
        <button onClick={(e) => handleClick3(e)}> Click it </button>
    </main>
  )
}

export default Content