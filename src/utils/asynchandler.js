// study about functions -->  https://claude.ai/chat/71732b65-e3c6-49e2-9a26-d1e865214293

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise
            .resolve(requestHandler(req, res, next))
            .catch((err) => next(err))
    }
}

export {asyncHandler}

