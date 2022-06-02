export const getUserById = async (users, id) => {
    const findUserById = await users.find((user) => user.id === id);
    return findUserById;
};

export const getUserByUserId = async (users, userId) => {
    const findUserByUserId = await users.find((user) => user.id === userId);
    return findUserByUserId;
};

export const postUser = async (users, user) => {
    const newUser = { ...user, userId: user.id, id: users.length };
    return newUser;
};

export const loginApi = async (users, user) => {
    const checkUser = await users.find((data) => data.userId === user.id && data.password === user.password);
    return { isLogin: checkUser ? true : false, user: checkUser };
};

export const logoutApi = async (userId) => {
    return true;
};

export const checkId = async (users, userId) => {
    const isCheckId = (await users.find((user) => user.userId === userId)) ? true : false;
    return isCheckId;
};

export const putUser = async (users, user, id) => {
    const findUsersIndex = await users.findIndex((user) => user.userId === id);
    const { name, img } = user;
    if (findUsersIndex === -1) {
        console.error("not found");
        return;
    }
    const newUsers = [...users];
    newUsers.splice(findUsersIndex, 1, { ...users[findUsersIndex], name, img });
    return newUsers;
};
