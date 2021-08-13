import { toast } from "react-toastify"

const newNotification = (message, args) => {
    let type = toast.TYPE.INFO
    if (args?.type) {
        switch (args.type) {
            case 'ERROR':
                type = toast.TYPE.ERROR
                break
            case 'SUCCESS':
                type = toast.TYPE.SUCCESS
                break
        }
    }
    toast(message, {...args, type: type})
}

export {
    newNotification
}