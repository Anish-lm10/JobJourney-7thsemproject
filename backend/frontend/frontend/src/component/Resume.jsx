import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Resume() {
  const [experience, setExperience] = useState([""]);
  const [skill, setSkill] = useState([""]);
  const [education, setEducation] = useState([""]);
  const [hobbies, setHobbies] = useState([""]);
  function handelClick1() {
    setExperience([...experience, ""]);
  }
  function handelClick2() {
    setSkill([...skill, ""]);
  }
  function handelClick3() {
    setEducation([...education, ""]);
  }
  function handelClick4() {
    setHobbies([...hobbies, ""]);
  }

  function handelDelete1(item, index) {
    const List = [...experience];
    List.splice(index, 1);
    setExperience(List);
  }
  function handelDelete2(item, index) {
    const List = [...skill];
    List.splice(index, 1);
    setSkill(List);
  }
  function handelDelete3(item, index) {
    const List = [...education];
    List.splice(index, 1);
    setEducation(List);
  }
  function handelDelete4(item, index) {
    const List = [...hobbies];
    List.splice(index, 1);
    setHobbies(List);
  }

  return (
    <>
      <div className="w-full bg-[#0F172A] ">
        <Navbar />
        <div className="mt-5  flex justify-center">
          <form
            method="POST"
            action="http://127.0.0.1:8000/resume/"
            className="bg-white py-[5vh] w-[70%] px-[50px]"
          >
            <div className="flex justify-center text-[#0F172A] lg:text-3xl sm:text-2xl font-bold ">
              Create Your Resume
            </div>
            <div>
              <div className=" text-[#0F172A] text-xl mt-5 font-bold">
                Tell Us About Yourself
                <hr></hr>
              </div>
              <div className="grid grid-cols-2 gap-10 mt-4 ">
                <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                  <label htmlFor="firstname">
                    First Name<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="Enter your firstname"
                    required
                  />
                </div>
                <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                  <label htmlFor="lastname">
                    Last Name<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="Enter your lastname"
                    required
                  />
                </div>
                <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                  <label htmlFor="contactnumber">
                    Contact No<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="number"
                    id="contactnumber"
                    name="contactnumber"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div className="text-[#0F172A] text-xl  font-bold flex flex-col gap-3 ">
                  <label htmlFor="email">
                    Email<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                  <label htmlFor="location">
                    Location<sup className="text-xl font-bold">*</sup>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="Enter your location"
                    required
                  />
                </div>
                <div className="text-[#0F172A]  text-xl  flex flex-col gap-3 ">
                  <label htmlFor="language" className="font-bold">
                    Language<sup className="">(optional)</sup>
                  </label>
                  <div className="flex gap-[10px]">
                    <div>
                      <input
                        type="checkbox"
                        id="english"
                        name="language"
                        value="english"
                      />
                      <label for="english"> English</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="nepali"
                        name="language"
                        value="nepali"
                      />
                      <label for="nepali">Nepali</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="Others"
                        name="language"
                        value="Others"
                      />
                      <label for="Others"> Others</label>
                    </div>
                  </div>
                </div>

                <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                  <label htmlFor="gender">
                    Gender<sup className="text-xl font-bold">*</sup>
                  </label>
                  <select
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    name="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                  <label htmlFor="description">
                    Description<sup className="text-xl font-bold">*</sup>
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                    placeholder="only 150 characters"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <div className=" text-[#0F172A] text-xl mt-5 font-bold">
                Tell Us About Your Education
                <hr></hr>
              </div>
              <div className="grid grid-cols-1 gap-10">
                {education.map((item, i) => {
                  return (
                    <div
                      className="flex flex-col gap-[10px] border-[#0F172A] border-2 border p-[20px] "
                      key={i}
                    >
                      <div className="flex gap-[20px] justify-center items-center ">
                        <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3 ">
                          <label htmlFor="startDate">StartDate:</label>
                          <input
                            type="date"
                            id="startDate"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                            name="startDate"
                            required
                          />
                        </div>
                        <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                          <label htmlFor="endDate">EndDate:</label>
                          <input
                            type="date"
                            id="endDate"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                            name="endDate"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-[20px] justify-center items-center">
                        <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                          <label htmlFor="institution">Institution:</label>
                          <input
                            type="text"
                            id="institution"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                            name="institution"
                            required
                          />
                        </div>
                        <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                          <label htmlFor="degree">Degree:</label>
                          <input
                            type="text"
                            id="degree"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                            name="degree"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="my-[20px] flex gap-[20px] juistify-center items-center">
                {education.length > 1 && (
                  <button
                    onClick={handelDelete3}
                    className="h-[40px] w-[75px] text-lg rounded  bg-red-200 border-none   text-[#0F172A] font-semibold"
                  >
                    <MdDelete className="h-[30px] w-[30px]" />
                  </button>
                )}
                {education.length < 3 && (
                  <button
                    onClick={handelClick3}
                    className="h-[40px] w-[75px] text-lg rounded bg-blue-200 border-none text-[#0F172A] font-semibold"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>

            <div>
              <div className=" text-[#0F172A] text-xl mt-5 font-bold">
                Tell Us About Your Work Experience
                <hr></hr>
              </div>
              <div className="grid grid-cols-1 gap-10">
                {experience.map((item, i) => {
                  return (
                    <div
                      className="flex flex-col gap-[10px] border-[#0F172A] border-2 border p-[20px] "
                      key={i}
                    >
                      <div className="flex gap-[20px] justify-center items-center ">
                        <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3 ">
                          <label htmlFor="startDate">StartDate:</label>
                          <input
                            type="date"
                            id="startDate"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                            name="startDate"
                            required
                          />
                        </div>
                        <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                          <label htmlFor="endDate">EndDate:</label>
                          <input
                            type="date"
                            id="endDate"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                            name="endDate"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-[20px] justify-center items-center">
                        <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                          <label htmlFor="company">Company:</label>
                          <input
                            type="text"
                            id="company"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                            name="company"
                            required
                          />
                        </div>
                        <div className="w-100 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                          <label htmlFor="position">Position:</label>
                          <input
                            type="text"
                            id="position"
                            className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                            name="position"
                            required
                          />
                        </div>
                      </div>
                      <div className="w-50 text-[#0F172A] text-xl  font-semibold flex flex-col gap-3">
                        <label htmlFor="description">Description:</label>
                        <input
                          type="text"
                          id="description"
                          className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-[100%] rounded outline-none"
                          name="description"
                          required
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="my-[20px] flex gap-[20px] juistify-center items-center">
                {experience.length > 1 && (
                  <button
                    onClick={handelDelete1}
                    className="h-[40px] w-[75px] text-lg rounded  bg-red-200 border-none   text-[#0F172A] font-semibold"
                  >
                    <MdDelete className="h-[30px] w-[30px]" />
                  </button>
                )}
                {experience.length < 3 && (
                  <button
                    onClick={handelClick1}
                    className="h-[40px] w-[75px] text-lg rounded bg-blue-200 border-none  text-[#0F172A] font-semibold"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="skills">
                  Skills <sup className="text-xl font-bold">*</sup>
                </label>
                <div className="flex flex-col gap-[10px]">
                  {skill.map((item, i) => {
                    return (
                      <div className="flex gap-[10px] justify-center items-center">
                        <input
                          key={i}
                          type="text"
                          id="skill"
                          className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-100 rounded outline-none"
                          name="skill"
                          placeholder="Enter your skill"
                          required
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="my-[20px] flex gap-[20px] juistify-center items-center">
                  {skill.length > 1 && (
                    <button
                      onClick={handelDelete2}
                      className="h-[40px] w-[75px] text-lg rounded  bg-red-200 border-none  text-[#0F172A] font-semibold"
                    >
                      <MdDelete className="h-[30px] w-[30px]" />
                    </button>
                  )}
                  {skill.length < 5 && (
                    <button
                      onClick={handelClick2}
                      className="h-[40px] w-[75px] text-lg rounded bg-blue-200 border-none text-[#0F172A] font-semibold"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
              <div className="text-[#0F172A]  text-xl font-bold flex flex-col gap-3 ">
                <label htmlFor="hobbies">
                  Hobbies <sup className="text-xl font-bold">*</sup>
                </label>
                <div className="flex flex-col gap-[10px]">
                  {hobbies.map((item, i) => {
                    return (
                      <div className="flex gap-[10px] justify-center items-center">
                        <input
                          key={i}
                          type="text"
                          id="hobbies"
                          className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 w-100 rounded outline-none"
                          name="hobbies"
                          placeholder="Enter your hobbies"
                          required
                        />

                      </div>
                    );
                  })}
                </div>
                <div className="my-[20px] flex gap-[20px] juistify-center items-center">
                  {hobbies.length > 1 && (
                    <button
                      onClick={handelDelete4}
                      className="h-[40px] w-[75px] text-lg rounded  bg-red-200 border-none   text-[#0F172A] font-semibold"
                    >
                      <MdDelete className="h-[30px] w-[30px]" />
                    </button>
                  )}
                  {hobbies.length < 5 && (
                    <button
                      onClick={handelClick4}
                      className="h-[40px] w-[75px] text-lg rounded bg-blue-200 border-none  text-[#0F172A] font-semibold"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
              <div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3">
                <label htmlFor="project">
                  Project<sup className="text-xl font-bold">*</sup>
                </label>
                <input
                  type="url"
                  id="project"
                  name="project"
                  placeholder="enter your project link"
                  className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
                />
              </div>


<div className="text-[#0F172A] text-xl font-bold flex flex-col gap-3 ">
  <label htmlFor="profile_image">
    Upload Profile Image<sup className="text-xl font-bold">*</sup>
  </label>
  <input
    type="file"
    id="profile_image"
    name="profile_image"
    className="bg-white border-[#0F172A] border-2 text-[#0F172A] py-2 px-4 rounded outline-none"
    accept="image/*"
    required
  />
</div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className=" text-lg rounded mt-3 bg-blue-200 border-none py-2 px-4 text-[#0F172A] font-semibold">
                Create Resume
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
