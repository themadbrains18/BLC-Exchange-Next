import React,{useState} from 'react'
import ActiveCta from '../snippets/activeCta'
import DataTable from '../snippets/dataTable';

const Competiton = () => {
    const [active, setActive] = useState(0);
    const [index, setIndex] = useState(0);
    let activeCta = ["Competition Records", "My Rankings", "Prizes Won"];
    let obj = [ 'All', 'Upcoming','Ongoing', 'Ended'   ];

    const headings1=['Name','Type','Rewards','Current Status','Countdown']
    const headings2=['Name','Competition Content','Ranking']
    const headings3=['Name','Prize','Time of Winning']
    

  return (
    <section className="w-full ">
      <div>
        <p className='section-secondary-heading'>Competitions</p>

        <div className="mt-5   overflow-x-auto table_box border-b border-border-clr">
            <ActiveCta data={activeCta} active={active} setActive={setActive} />
          </div>
          <div>
          {active === 0 && (
            <>
             <div className={`cta_box mt-4 flex gap-2 overflow-x-auto table_box`}>
            {obj.map((e, i) => {
              return (
                <button
                  key={i}
                  className={`w-max text-center py-2 px-4 font-noto text-sm whitespace-nowrap rounded-lg dark:text-white ${
                    index === i
                      ? "bg-primary text-white"
                      : ""
                  }`} onClick={()=>{setIndex(i)}}
                >
                  {e}
                </button>
              );
            })}
            </div>
            <div>
              <DataTable heading={headings1} />
              <div className='py-20 '>
                <img src='/assets/icons/no-data2.svg' alt='error' className='mx-auto'></img>
                <p className='info-14 text-center mt-5'>No Data</p>
              </div>
            </div>
            </>
           
          )}
          {active === 1 && (
            <>
            <div>
              <DataTable heading={headings2}/>
              <div className='py-20 '>
                <img src='/assets/icons/no-data2.svg' alt='error' className='mx-auto'></img>
                <p className='info-14 text-center mt-5'>No Data</p>
              </div>
            </div>
            </>
           
          )}
          {active === 2 && (
            <>
            <div>
              <DataTable heading={headings3}/>
              <div className='py-20 '>
                <img src='/assets/icons/no-data2.svg' alt='error' className='mx-auto'></img>
                <p className='info-14 text-center mt-5'>No Data</p>
              </div>
            </div>
            </>
           
          )}
        
          </div>
      </div>
    </section>
  )
}

export default Competiton
