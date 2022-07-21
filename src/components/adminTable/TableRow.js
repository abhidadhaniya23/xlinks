import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { Link } from "react-router-dom";

const TableRow = ({ name, email, username, profilePic, time, index }) => {
    TimeAgo.addDefaultLocale(en);
    const timeAgo = new TimeAgo("en-US");
    const humanTime = new Date(time);
    // console.log(humanTime.toLocaleDateString());
    return (
        <>
            <tr className="even:bg-white odd:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200">{index}</td>
                <td className="px-6 py-4 text-base text-gray-800 dark:text-gray-200">
                    <img src={profilePic} className="w-14 rounded-full" alt="" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200">{name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">{email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
                    <Link to={`/${username}`}>{username}</Link>
                </td>
                <td className="px-6 py-4 text-base text-gray-800 dark:text-gray-200">{timeAgo.format(humanTime)}</td>
            </tr>
        </>
    );
};

export default TableRow;
