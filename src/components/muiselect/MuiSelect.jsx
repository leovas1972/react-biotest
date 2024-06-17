import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import './style.css'

const MuiSelect = () => {
    const { t, i18n } = useTranslation();
    const [country, setCountry] = useState('');
    console.log({ country })
    const handleChange = (event) => {
        setCountry(event.target.value)
        i18n.changeLanguage(event.target.value)
    }
    return (<Box className='select'>
        <Box className='select-box' >
            <h1>{t("select.welcome")}</h1>
            <TextField
                label={t('select.label')}
                select
                value={country}
                onChange={handleChange}
                fullWidth
                size='small'
                color='secondary'>
                <MenuItem value='ru'>Russia</MenuItem>
                <MenuItem value='en'>English</MenuItem>
                <MenuItem value='fr'>French</MenuItem>
            </TextField>
            
        </Box>
    </Box>)

    // return (<>
    // <label>{t('select.label')}</label>
    // <select value={country} onChange={handleChange}>
    //     <option value='ru'>{t('select.country')}</option>
    //     <option value='en'>English</option>
    //     <option value='fr'>French</option>
    // </select>
    // </>)
}

export default MuiSelect;
