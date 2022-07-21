import React from "react";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Pannel = () => {
    const [profileData, setProfileData] = useState([]);
    const [availableProfiles, setAvailableProfiles] = useState(0);
    const getData = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/user/get`)
            .then((res) => res.json())
            .then((data) => {
                setProfileData(data.data.reverse());
            });
    };
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        setAvailableProfiles(profileData.filter((item) => item.username).length);
        // console.log(profileData.filter((item) => item.username).length);
    }, [profileData]);
    return (
        <>
            <div className="flex flex-col font-inter p-2 md:p-10">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-base font-bold text-gray-900 uppercase">
                                            Sr.
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-base font-bold text-gray-900 uppercase">
                                            Pic
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-base font-bold text-gray-900 uppercase">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-base font-bold text-gray-900 uppercase">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-base font-bold text-gray-900 uppercase">
                                            username ({availableProfiles})
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-base font-bold text-gray-900 uppercase">
                                            Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profileData.map((userItem, index) => (
                                        <TableRow index={index + 1} key={userItem._id} username={userItem.username} profilePic={userItem.profilePic} name={userItem.fullName} time={userItem.createdAt} email={userItem.email} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pannel;
