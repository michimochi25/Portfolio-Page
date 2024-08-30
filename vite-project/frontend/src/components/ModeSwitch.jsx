import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

function ModeSwitch({ isDarkMode, setDarkMode }) {
  return (
    <div className='cursor-pointer sm:p-0 py-[8px] px-[16px]' onClick={() => setDarkMode(!isDarkMode)}>
      {isDarkMode && <DarkModeRoundedIcon fontSize="small" />}
      {!isDarkMode && <LightModeRoundedIcon fontSize="small" />}
    </div>
  )
}

export default ModeSwitch;