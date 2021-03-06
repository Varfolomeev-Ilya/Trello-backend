const models = require('../db/models');

exports.createTask = async (req, res, next) => {
    try {
        const { id, text } = req.body;

        const column = await models.Column.findByPk(id);

        if (!column) {
            throw new Error('column not found');
        }

        const task = await column.createTask({
            text: text
        });
        res.json(task)

    } catch (error) {
        next(error);
    };
};

exports.deleteTasks = async (req, res, next) => {
    try {
        const { taskDelId } = req.body;

        const task = await models.Task.findByPk(taskDelId);
        if (!task) {
            throw new Error('Task not found');
        }

        await models.Task.destroy({
            where: {
                id: taskDelId,
            }
        })
        res.json('task was deleted');
    } catch (error) {
        next(error);
    }
};

exports.updateTasks = async (req, res, next) => {
    try {
        const { text, id } = req.body;
        const task = await models.Task.update(
            { text: text },
            {
                where: { id },
            },
        );

        if (!task) {
            throw new Error('task not found');
        }
        res.json('task was updated');
    } catch (error) {
        next(error);
    }
};

exports.changeTasksColumnId = async (req, res, next) => {
    try {
        const { columnId, taskId } = req.body;
        const task = await models.Task.update(
            { columnId: columnId },
            {
                where: { id: taskId },
            },
        );

        if (!task) {
            throw new Error('task not found');
        }
        res.json('task was changed');
    } catch (error) {
        next(error);
    }
}