import { useState } from 'react';
import { Bot, updateScore } from './decision';

import rock from './assets/rock.svg';
import paper from './assets/paper.svg';
import scissor from './assets/scissor.svg';


import './App.css';
import Result from './Result';


export default function () {
    const [humanScore, setHumanScore] = useState(0);
    const [botScore, setBotScore] = useState(0);

    const [mySelection, setMySelection] = useState(1);
    const [botSelection, setBotSelection] = useState(1);

    const [shake, setShake] = useState(false);

    const action = (num) => {
        setShake(true)
        setMySelection(() => 1)
        setBotSelection(() => 1)

        const cpu = Bot()

        setTimeout(() => {
            setMySelection(() => num)
            setBotSelection(() => cpu)
            setShake(false)
            const data = updateScore(num, cpu, humanScore, botScore);
            setHumanScore(data.me);
            setBotScore(data.bot);
        }, 1000);
    }

    return (
        <div className='h-[100vh] flex flex-col justify-between'>
            <div className='flex flex-col justify-between h-[80%]'>
                {/* For CPU */}
                <section className='p-5'>
                    <div>
                        <img
                            className={`${shake && "vibrate"} w-24 rotate-155`}
                            src={`${botSelection == 1 ? rock : botSelection == 2 ? scissor : paper}`}
                        />
                    </div>
                </section>



                {/* Score Board */}
                <section>
                    <div className=' top-6 h-40 w-12 bg-amber-100 border-2 border-l-0 border-amber-300 relative rounded-r-lg flex flex-col justify-between'>
                        <div className='flex justify-center pt-2 text-3xl font-bold text-black'>
                            {botScore}
                        </div>
                        <div className='flex justify-center pt-2 text-3xl font-bold text-black'>
                            {humanScore}
                        </div>
                    </div>

                    <div>
                        {/* <Result humanScore={humanScore} botScore={botScore}></Result> */}
                    </div>
                </section>


                {/* For HUMAN */}
                <section className='flex justify-end p-5'>
                    <div>
                        <img
                            className={`${shake && "vibrate"} w-24 -rotate-25`}
                            src={`${mySelection == 1 ? rock : mySelection == 2 ? scissor : paper}`}
                        />
                    </div>
                </section>
            </div>


            <div>
                {/* Action Buttons */}
                <section className='bg-amber-100 border-t-2 border-amber-300 flex justify-between py-4 pb-20'>
                    <button
                        className='flex justify-center cursor-pointer'
                        onClick={() => action(1)}
                        disabled={shake}
                    >
                        <img className='w-[45%]' src={rock} alt="" />
                    </button>
                    <button
                        className='flex justify-center cursor-pointer'
                        onClick={() => action(3)}
                        disabled={shake}
                    >
                        <img className='w-[45%]' src={paper} alt="" />
                    </button>
                    <button
                        className='flex justify-center cursor-pointer'
                        onClick={() => action(2)}
                        disabled={shake}
                    >
                        <img className='w-[45%]' src={scissor} alt="" />
                    </button>
                </section>
            </div>
        </div>
    )
}
