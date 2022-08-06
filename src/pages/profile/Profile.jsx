import { useContext, useRef, useEffect, useState } from 'react';
import swal from 'sweetalert';

import { UserApi } from '../../api/user';

import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';

import { UserContext } from '../../context/UserContext';
import { TokenContext } from '../../context/TokenContext';

export default function Profile() {
    
    const { clientToken } = useContext(TokenContext);
    const { user } = useContext(UserContext);

    if (!user) window.location = '/';

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    // const mobileRef = useRef();
    const regionsRef = useRef();
    const provincesRef = useRef();
    const municipalitiesRef = useRef();
    const barangaysRef = useRef();
    const addressRef = useRef();

    const [regions, setRegions] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [municipalities, setCities] = useState([]);
    const [barangays, setBarangays] = useState([]);

    const getRegions = () => {
        let headers = new Headers();
        headers.append("Content-Type", "");
        headers.append("Accept", "application/json");
        headers.append('Authorization', `Bearer ${clientToken}`);
        
        let body = "";
        
        let requestOptions = {
          method: 'POST',
          headers,
          body,
          redirect: 'follow'
        };
        
        fetch("https://api.concati.com/address/regions", requestOptions)
          .then(response => response.json())
          .then(result => { setRegions(result.data) })
          .catch(error => console.log('error', error));
    }

    useEffect(() => {
        regionsRef.current.innerHTML = '';
        let nullOption = document.createElement('option');
        nullOption.disabled = true;
        nullOption.selected = true;
        nullOption.textContent = 'Select Region';
        regionsRef.current.appendChild(nullOption);
        [...regions].forEach( region => {
            let regionOption = document.createElement('option');
            regionOption.value = region.region_id;
            regionOption.textContent = region.region_name;
            regionsRef.current.appendChild(regionOption);
        })
    }, [regions])

    const getProvinces = () => {
        if (regionsRef.current.value !== 'Select Region') {
            let headers = new Headers();
            headers.append("Content-Type", "");
            headers.append("Accept", "application/json");
            headers.append('Authorization', `Bearer ${clientToken}`);
            
            let body = {
                region_id: [regionsRef.current.value]
            };
            
            let requestOptions = {
              method: 'POST',
              headers,
              body: JSON.stringify(body),
              redirect: 'follow'
            };
            
            fetch("https://api.concati.com/address/provinces", requestOptions)
              .then(response => response.json())
              .then(result => { setProvinces(result.data) })
              .catch(error => console.log('error', error));
        }
    }

    useEffect(() => {
        if (regionsRef.current.value !== 'Select Region') provincesRef.current.disabled = false;
        provincesRef.current.innerHTML = '';
        let nullOption = document.createElement('option');
        nullOption.disabled = true;
        nullOption.selected = true;
        nullOption.textContent = 'Select Province';
        provincesRef.current.appendChild(nullOption);
        [...provinces].forEach( province => {
            let provinceOption = document.createElement('option');
            provinceOption.value = province.province_id;
            provinceOption.textContent = province.province_name;
            provincesRef.current.appendChild(provinceOption);
        })
    }, [provinces])

    const getCities = () => {
        if (provincesRef.current.value !== 'Select Province') {
            let headers = new Headers();
            headers.append("Content-Type", "");
            headers.append("Accept", "application/json");
            headers.append('Authorization', `Bearer ${clientToken}`);
            
            let body = {
                region_id: [regionsRef.current.value],
                province_id: [provincesRef.current.value],
            };
            
            let requestOptions = {
              method: 'POST',
              headers,
              body: JSON.stringify(body),
              redirect: 'follow'
            };
            
            fetch("https://api.concati.com/address/municipalities", requestOptions)
              .then(response => response.json())
              .then(result => { setCities(result.data) })
              .catch(error => console.log('error', error));
        }
    }

    useEffect(() => {
        if (provincesRef.current.value !== 'Select Province') municipalitiesRef.current.disabled = false;
        municipalitiesRef.current.innerHTML = '';
        let nullOption = document.createElement('option');
        nullOption.disabled = true;
        nullOption.selected = true;
        nullOption.textContent = 'Select City';
        municipalitiesRef.current.appendChild(nullOption);
        [...municipalities].forEach( municipality => {
            let municipalityOption = document.createElement('option');
            municipalityOption.value = municipality.municipality_id;
            municipalityOption.textContent = municipality.municipality_name;
            municipalitiesRef.current.appendChild(municipalityOption);
        })
    }, [municipalities])

    const getBarangays = () => {
        if (municipalitiesRef.current.value !== 'Select City') {
            let headers = new Headers();
            headers.append("Content-Type", "");
            headers.append("Accept", "application/json");
            headers.append('Authorization', `Bearer ${clientToken}`);
            
            let body = {
                region_id: [regionsRef.current.value],
                province_id: [provincesRef.current.value],
                municipality_id: [municipalitiesRef.current.value]
            };
            
            let requestOptions = {
              method: 'POST',
              headers,
              body: JSON.stringify(body),
              redirect: 'follow'
            };
            
            fetch("https://api.concati.com/address/barangays", requestOptions)
              .then(response => response.json())
              .then(result => { setBarangays(result.data) })
              .catch(error => console.log('error', error));
        }
    }

    useEffect(() => {
        if (municipalitiesRef.current.value !== 'Select City') barangaysRef.current.disabled = false;
        barangaysRef.current.innerHTML = '';
        let nullOption = document.createElement('option');
        nullOption.disabled = true;
        nullOption.selected = true;
        nullOption.textContent = 'Select Barangay';
        barangaysRef.current.appendChild(nullOption);
        [...barangays].forEach( barangay => {
            let barangayOption = document.createElement('option');
            barangayOption.value = barangay.barangay_id;
            barangayOption.textContent = barangay.barangay_name;
            barangaysRef.current.appendChild(barangayOption);
        })
    }, [barangays])

    const handleEditUser = async ev => {
        ev.preventDefault();

        const body = {}
        if (firstnameRef.current.value !== '')
            body['first_name'] = firstnameRef.current.value
        if (lastnameRef.current.value !== '')
            body['last_name'] = lastnameRef.current.value
        if (emailRef.current.value !== '')
            body['email'] = emailRef.current.value
        if (regionsRef.current.value !== '' && regionsRef.current.value !== 'Select Region')
            body['region'] = regionsRef.current.value
        if (provincesRef.current.value !== '' && provincesRef.current.value !== 'Select Province')
            body['province'] = provincesRef.current.value
        if (municipalitiesRef.current.value !== '' && municipalitiesRef.current.value !== 'Select City')
            body['city_municipality'] = municipalitiesRef.current.value
        if (barangaysRef.current.value !== '' && barangaysRef.current.value !== 'Select Barangay')
            body['barangay'] = barangaysRef.current.value
        if (addressRef.current.value !== '')
            body['address'] = addressRef.current.value
            
        console.log(body);

        try {
            const response = await UserApi('PUT', '/profile', user.accessToken, body, clientToken);
            console.log(response);
            if ( response.code === 200 || response.status === 200 ) {
                swal('User Updated','','success');
            } else if ( response.code === 403 || response.status === 403 ) {
                swal('User update failed', 'Please try again later.', 'error');
            }
        } catch (error) {
            swal('User update failed', 'Please try again later.', 'error');
        }
    }

    const handleChangePassword = ev => {
        ev.preventDefault();
    }

    const handleLogout = ev => {
        // localStorage.clear('user');
        window.location = '/';
    }

    useEffect(() => {
        getRegions();
    }, [])
    

  return (
<div className='flex flex-col min-h-screen'>
    <Navbar />

    <div className='flex-grow w-9/12 max-w-screen-xl mx-auto'>

        <button className='col-span-9 bg-black text-white p-3 mx-auto mb-10' onClick={handleLogout}>Logout</button>
        <h1 className='self-center mb-6 text-xl font-semibold sm:text-2xl'>Profile</h1>
        <form onSubmit={handleEditUser} className="w-full grid grid-cols-9">
            <label className='col-span-3 mb-5 ml-auto mr-5 my-2' htmlFor='first_name'>First Name:</label>
            <input className='col-span-6 mb-5 w-9/12 p-2' type='text' id='first_name' defaultValue={user.first_name} ref={firstnameRef} placeholder="Enter first name" required />
            
            <label className='col-span-3 mb-5 ml-auto mr-5 my-2' htmlFor='last_name'>Last Name:</label>
            <input className='col-span-6 mb-5 w-9/12 p-2' type='text' id='last_name' defaultValue={user.last_name} placeholder="Enter last name" ref={lastnameRef} />
            
            <label className='col-span-3 mb-5 ml-auto mr-5 my-2' htmlFor='email'>Email:</label>
            <input className='col-span-6 mb-5 w-9/12 p-2' type='text' id='email' defaultValue={user.email} ref={emailRef} placeholder="Enter email" required />
            
            {/* <label className='col-span-3 mb-5 ml-auto mr-5 my-2' htmlFor='mobile'>Mobile:</label>
            <input className='col-span-6 mb-5 w-9/12 p-2' type='text' id='mobile' defaultValue={user.mobile} placeholder="Enter mobile number" ref={mobileRef} /> */}
            
            <label className='col-span-3 mb-5 ml-auto mr-5 my-2' htmlFor='region'>Region:</label>
            <select className='col-span-6 mb-5 w-9/12 p-2' id='region' defaultValue={user.region} onChange={getProvinces} ref={regionsRef} >
                {/* { user.region ? '' : <option selected disabled>Select Region</option>} */}
            </select>
            
            <label className='col-span-3 mb-5 ml-auto mr-5 my-2' htmlFor='province'>Province:</label>
            <select className='col-span-6 mb-5 w-9/12 p-2' type='text' id='province' defaultValue={user.province} onChange={getCities} ref={provincesRef} disabled >
                {/* { user.province ? '' : <option selected disabled>Select Province</option>} */}
            </select>
            
            <label className='col-span-3 mb-5 ml-auto mr-5 my-2' htmlFor='municipality'>City:</label>
            <select className='col-span-6 mb-5 w-9/12 p-2' type='text' id='municipality' defaultValue={user.municipality} onChange={getBarangays} ref={municipalitiesRef} disabled >
                {/* { user.municipality ? '' : <option selected disabled>Select City</option>} */}
            </select>
            
            <label className='col-span-3 mb-5 ml-auto mr-5 my-2' htmlFor='barangay'>Barangay:</label>
            <select className='col-span-6 mb-5 w-9/12 p-2' type='text' id='barangay' defaultValue={user.barangay} ref={barangaysRef} disabled >
                {/* { user.barangay ? '' : <option selected disabled>Select Barangay</option>} */}
            </select>
            
            <label className='col-span-3 mb-5 ml-auto mr-5 my-2' htmlFor='address'>Street Address:</label>
            <input className='col-span-6 mb-5 w-9/12 p-2' type='text' id='address' defaultValue={user.address} ref={addressRef} placeholder="Enter address" />

            <button className='col-span-9 bg-black text-white p-3 mx-auto' type='submit'>Edit Profile</button>
        </form>

        <form onSubmit={handleChangePassword}>

        </form>
    </div>

    <Footer />
</div>
  )
}