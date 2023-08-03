import React from 'react';
import { SectionWrapper } from "../hoc/index.js";
import { contFoot } from "../constants/index.js";


const Footer = () => {
    const {
        conemail,
        ajnum,
        dnum2,
        dnum1,
        indnum1,
        indnum2,
        email,
        location,
        call,
    } = contFoot[0];

    return (
        <div className={'bg-transparent w-auto flex'}>

                <div
                    className=' p-0.5 rounded-xl sm:w-[360px] w-auto flex flex-col '
                >
                    <p className="flex space-x-2">
                        <img src={location} alt="email" className="w-5 h-5 object-contain bg-white" />
                        <span className="ml-2">PO Box 4422, Ajman,<br className="sm:block hidden" />
                        United Arab Emirates </span>
                    </p>

                    <br className="sm:block hidden" />
                    <br className="sm:block hidden" />

                    <p className="flex items-center space-x-2">
                        <img src={call} alt="phone icon" className="w-5 h-5 object-contain bg-white" />
                        <span className="ml-2">{ajnum}</span>
                    </p>

                </div>

            <div
                className=' p-0.5 rounded-xl sm:w-[360px] w-auto flex flex-col '
            >
                <p className="flex space-x-2">
                    <img src={location} alt="email" className="w-5 h-5 object-contain bg-white" />
                    <span className="ml-2">905-F, IBN Battuta Gate <br className="sm:block hidden" />
                Office Complex, Jebel Ali-1,
                Shaik Zayed Road, Dubai, UAE</span>
                </p>

                <br className="sm:block hidden" />

                <p className="flex space-x-2">
                    <img src={call} alt="phone icon" className="w-5 h-5 object-contain bg-white" />
                    <span className="ml-2">{dnum1}<br className="sm:block hidden" />{dnum2}</span>
                </p>

            </div>

            <div
                className=' p-0.5 rounded-xl sm:w-[360px] w-auto flex flex-col '
            >
                <p className="flex space-x-2">
                    <img src={location} alt="email" className="w-5 h-5 object-contain bg-white" />
                    <span className="ml-2">A3 ,Ground Floor <br className="sm:block hidden" />
                Sector 59, Noida, India. </span>
                </p>

                <br className="sm:block hidden" />
                <br className="sm:block hidden" />

                <p className="flex space-x-2">
                    <img src={call} alt="phone icon" className="w-5 h-5 object-contain bg-white" />
                    <span className="ml-2">{indnum1}<br className="sm:block hidden" />{indnum2}</span>
                </p>

            </div>

            <div
                className='p-0.5 rounded-xl sm:w-[360px] w-auto flex flex-col '
            >
                <p className="flex space-x-2">
                    <img src={email} alt="email icon" className="w-5 h-5 object-contain bg-white" />
                    <span className="ml-2">{conemail}</span>
                </p>
            </div>
        </div>
    );
};

export default SectionWrapper(Footer, "");