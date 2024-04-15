export default function Icon({ icon, classExtra }: { icon: string; classExtra: string }) {
    return (
      <div className='h-17 w-17  flex justify-center items-center  bg-transparent'>
        <i className={`text-white w-17 h-17 flex justify-center items-center ${classExtra}`}>
          <svg xmlns='http://www.w3.org/2000/svg' width='68px' height='68px' viewBox='0 0 24 24'>
            <path fill='black' d={icon} />
          </svg>
        </i>
      </div>
    );
  }