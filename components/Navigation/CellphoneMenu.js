import Title from './Title';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

export default function CellphoneMenu(){
    return(
        <>
            <div className="topNav">
                <div className='imageWrapper'>
                    <MenuIcon sx={{ color: "#FFFFFF" }} />
                </div>
                <Title />
                <div className='imageWrapper'>
                    <Image className="img" width={65} height={70} src="/images/foto-yo.png"/>
                </div>
            </div>
            <style jsx>{`
                .topNav {
                    position: absolute;
                    width: 100%;
                    height: 5rem;
                    background-color: black;
                    display: flex;
                    top:0;
                    right: 0;
                    left: 0;
                    flex-direction: row;
                    justify-content: space-around;
                    padding: 0.2rem 3rem;
                    align-content: center;
                }
                .imageWrapper{
                    align-content: center;
                    padding: auto;
                    align-self: center
                }
            `}</style>
        </>
        
    )
}