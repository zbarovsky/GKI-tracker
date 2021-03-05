import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState(null);

	return (
		<AppContext.Provider
			value={{
				userInfo,
				setUserInfo,
			}}>
			{children}
		</AppContext.Provider>
	);
};
