function Action({ action }) {
  return (
    <>
      <div className='pt-10 rounded '>
        <div className='bg-slate-50 p-2'>
          <div className='bg-slate-50 p-3 '>
            <p className='text-gray-600 text-xl font-semibold '>
              List of actions commited
            </p>
          </div>

          <div className='bg-slate-100 rounded '>
            {action
              .slice()
              .reverse()
              .map((actions, key) => (
                <div key={key}>
                  <ul className='list-none  '>
                    <li className='border-solid  p-1 flex flex-col-reverse '>
                      <div className=' '>
                        <div className='p-3 pr-4 grid grid-cols-4 bg-white rounded'>
                          <div className='col-span-3 text-gray-600 pt-2 pl-5 '>
                            Moved post {actions.value - 1} from index{' '}
                            {actions.value} to {actions.value - 1} index
                          </div>
                          <div className='col-span-1  '>
                            <button className='bg-green-500 hover:bg-green-600 w-35 h-10 text-white font-bold rounded p-2 '>
                              Time Travel
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Action
