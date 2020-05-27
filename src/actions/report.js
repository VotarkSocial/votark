import * as types from '../types/report'

export const toggleReport = () => ({
    type: types.REPORT
})

export const startSendingReport = (report) => ({
    type: types.SEND_REPORT_STARTED,
    payload: report,
});

export const completeSendingReport = () => ({
    type: types.SEND_REPORT_COMPLETED,
});
export const failSendingReport = (error) => ({
    type: types.SEND_REPORT_FAILED,
    payload: {
        error,
    },
});