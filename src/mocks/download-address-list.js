import {ReactComponent as AppleLogo} from '/src/assets/division-into-pages/main-page/header/apple-logo.svg'
import {ReactComponent as AndroidleLogo} from '/src/assets/division-into-pages/main-page/header/android-logo.svg'
import {ReactComponent as MicrosoftLogo} from '/src/assets/division-into-pages/main-page/header/microsoft-logo.svg'

export const downloadAddressList = [
    {
        id: 1,
        value: "app-downloadAddresses",
        link: 'https://www.apple.com/ru/ios/app-store/',
        image: <AppleLogo />,
        text: "раз"
    },
    {
        id: 2,
        value: "android-downloadAddresses",
        link: 'https://play.google.com/store',
        image: <AndroidleLogo />,
        text: "два"
    },
    {
        id: 3,
        value: "microsoft-downloadAddresses",
        link: 'https://www.microsoft.com/ru-ru/store/apps/windows-phone',
        image: <MicrosoftLogo />,
        text: "три"
    }
]