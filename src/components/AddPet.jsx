import React, { useState } from 'react'
import axios from 'axios'


const AddPet = () => {

    const [input, changeInput] = useState(

        {
            bookingId: "",
            petName: "",
            petType: "",
            breed: "",
            age: "",
            weightKg: "",
            vaccinationStatus: "",
            ownerName: "",
            ownerPhone: "",
            ownerEmail: "",
            checkInDate: "",
            checkOutDate: "",
            kennelNumber: ""
        }

    )

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-pet", input).then(

            (response) => {
                console.log(response.data)
                alert("Pet Added Successfully")
            }

        ).catch(

            (error) => {
                console.error("Error Adding vehicle!", error)
                alert("Failed to Add Pet!")
            }

        )

    }


    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Booking ID : </label>
                                <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pet Name: </label>
                                <input type="text" className="form-control" name="petName" value={input.petName} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pet Type (Dog/Cat/Bird...): </label>
                                <input type="text" className="form-control" name="petType" value={input.petType} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Breed: </label>
                                <input type="text" className="form-control" name="breed" value={input.breed} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age: </label>
                                <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Weight (kg): </label>
                                <input type="text" className="form-control" name="weightKg" value={input.weightKg} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vaccination Status: </label>
                                <input type="text" className="form-control" name="vaccinationStatus" value={input.vaccinationStatus} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Name: </label>
                                <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Phone: </label>
                                <input type="text" className="form-control" name="ownerPhone" value={input.ownerPhone} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Owner Email: </label>
                                <input type="text" className="form-control" name="ownerEmail" value={input.ownerEmail} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Check-in Date: </label>
                                <input type="date" className="form-control" name="checkInDate" value={input.checkInDate} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Check-out Date: </label>
                                <input type="date" className="form-control" name="checkOutDate" value={input.checkOutDate} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Kennel Number: </label>
                                <input type="text" className="form-control" name="kennelNumber" value={input.kennelNumber} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPet