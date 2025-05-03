import Image from "next/image";

const Avatar = () => {
  return (<div className="hidden w-full   xl:flex xl:max-w-none" >
    <Image src={'/avatarYacine2.png'} width={600} height={500} alt='' className="translate-z-0 w-full h-full"/>
    </div>
  );
};

export default Avatar;
