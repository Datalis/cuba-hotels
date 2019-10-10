import service from '@/api/request'

export function submitComment(data) {
    return service({
        url: '/comment',
        method: 'post',
        data: data
    })
}

export function getComments(params) {
    return service({
        url: '/comment',
        method: 'get',
        params
    })
}
