export default function Link({ icon, url }: { icon: string; url: string }) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 rounded-full">
        <div className='h-20 w-20 rounded-full bg-blue-500 flex justify-center items-center shadow-lg my-5'>
          <i className={`text-white w-17 h-17 flex justify-center items-center`}>
            <svg xmlns='http://www.w3.org/2000/svg' width='60px' height='60px' viewBox='0 0 24 24'>
              <path fill='black' d={icon} />
            </svg>
          </i>
        </div>
      </a>
    );
  }
  