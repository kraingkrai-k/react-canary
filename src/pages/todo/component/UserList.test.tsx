import {render, act} from "core/utils/test";

import UserList from "./UserList";

describe("UserList Component", () => {

    it('render correct.', async () => {
        await act(async () => {
            render(<UserList/>)
        });
    })

})
