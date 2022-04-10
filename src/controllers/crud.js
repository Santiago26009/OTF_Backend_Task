const hubspotClient = require('../database/Hubdb')

const userAct = {}

userAct.createUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, last_name, document_id } = req.body;
        const data = {
            values: {
                name,
                last_name,
                document_id
            }
        }
        const ans = await hubspotClient.cms.hubdb.rowsApi.createTableRow("developer_test_3", data)
        await hubspotClient.cms.hubdb.tablesApi.publishDraftTable("developer_test_3")
        res.status(201).json(ans)
    } catch (e) {
        return res.status(404).json({ error: `Error: ${e}` })
    }
}

userAct.readUser = async (req, res) => {
    try {
        const { id } = req.params;
        const ans = await hubspotClient.cms.hubdb.rowsApi.getTableRow("developer_test_3", `${id}`)
        return res.status(201).json(ans)
    } catch (e) {
        return res.status(404).json({ error: `Error: ${e}` })
    }
}

userAct.readAllUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const ans = await hubspotClient.cms.hubdb.rowsApi.getTableRows("developer_test_3")
        return res.status(201).json(ans)
    } catch (e) {
        return res.status(404).json({ error: `Error: ${e}` })
    }
}

userAct.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const row = await hubspotClient.cms.hubdb.rowsApi.getTableRow("developer_test_3", `${id}`)
        if (row) {
            const { name, last_name, document_id } = req.body;
            const data = {
                values: {
                    name,
                    last_name,
                    document_id
                }
            }
            const ans = await hubspotClient.cms.hubdb.rowsApi.updateDraftTableRow("developer_test_3", id, data)
            await hubspotClient.cms.hubdb.tablesApi.publishDraftTable("developer_test_3")
            return res.status(201).json(ans)
        }
    } catch (e) {
        return res.status(404).json({ error: `Error: ${e}` })
    }
}

userAct.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const row = await hubspotClient.cms.hubdb.rowsApi.getTableRow("developer_test_3", `${id}`)
        if (row) {
            await hubspotClient.cms.hubdb.rowsApi.purgeDraftTableRow("developer_test_3", `${id}`)
            await hubspotClient.cms.hubdb.tablesApi.publishDraftTable("developer_test_3")
            return res.status(201).json({ message: `User ${id} was deleted` })
        }
    } catch (e) {
        return res.status(404).json({ error: `Error: ${e}` })
    }
}

module.exports = userAct;