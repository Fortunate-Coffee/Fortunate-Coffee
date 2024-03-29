import SearchingButton from '../atoms/SearchingButton';
import SearchingText from '../atoms/SearchingText';

const Searching = () => {
    return(
        <div className='flex w-[92%]'>
            <SearchingButton />
            <div className="ms-3 w-full">
                <SearchingText />
            </div>
        </div>
    )
}

export default Searching;