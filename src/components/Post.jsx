import React, { useEffect, useState } from 'react'
import axios from '../api/api_endpoint'
import { IoChevronUp, IoChevronDown } from 'react-icons/io5'
import Action from './ListActions'

function Post() {
  const [post, setPost] = useState([])
  const [actions, setActions] = useState([])

  //get api post
  useEffect(() => {
    axios
      .get('/posts')
      .then((res) => {
        setPost(res.data)
        // console.log(post);
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const UP = -1
  const DOWN = 1

  // handle move the post list
  const handleMove = (id, direction) => {
    const position = post.findIndex((i) => i.id === id)
    if (position < 0) {
      throw new Error('Given item not found.')
    } else if (
      (direction === UP && position === 0) ||
      (direction === DOWN && position === post.length - 1)
    ) {
      return // canot move outside of array
    }

    const posts = post[position] // save item for later
    const newPost = post.filter((i) => i.id !== id) // remove item from array
    newPost.splice(position + direction, 0, posts)

    setPost(newPost)

    //set the state list of action
    let action = { value: post[id].id }
    const newAction = [...actions, action]
    // let sortedData = newAction.sort((a, b) => a - b)
    setActions(newAction)
    console.log(actions)
  }

  return (
    <>
      <div className='grid sm:grid-cols-2 gap-5 px-32'>
        <div>
          <div className='p-3'>
            <p className='text-white text-xl font-semibold pl-7 '>
              Sortable Post List
            </p>
          </div>

          <div>
            {post.slice(0, 5).map((data) => (
              <div key={data.id}>
                <ul className='list-none p-10 py-3'>
                  <li className='border-solid bg-slate-50 p-2 rounded'>
                    <div className=' flex flex-row grid grid-cols-4 '>
                      <div className='pl-4 col-span-3 text-gray-600'>
                        <b>Post {data.id} </b>
                        <br></br> {data.title}
                      </div>

                      <div className='arrow col-span-1 grid justify-items-end '>
                        <IoChevronUp onClick={() => handleMove(data.id, UP)} />
                        <br />
                        <IoChevronDown
                          onClick={() => handleMove(data.id, DOWN)}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Action action={actions} />
        </div>
      </div>
    </>
  )
}

export default Post
