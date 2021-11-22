import React from 'react'
import styles from './styles.module.scss'
import { Dropdown, Menu } from 'antd'
import { DropdownItem, DropdownMenu } from 'shared/ui/DropdownsComponents/index'
import { Button } from 'shared/ui/Button/index'

const Avatar = () => {
    const AvatarMenu = (
        <DropdownMenu>
            <DropdownItem>Выйти</DropdownItem>
        </DropdownMenu>
    );

    return (
        <Dropdown overlay={AvatarMenu} placement="bottomRight" trigger={['click']}>
            <Button className={styles.avatar}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_8)">
                        <path d="M34.1664 18.3333C34.1664 18.3333 35.833 17.5 39.9997 17.5C37.4997 10.8333 31.2247 10.5642 31.2247 10.5642L30.4089 10.4667L32.4997 4.16667C24.1664 4.16667 21.6664 7.5 21.6664 7.5C21.8622 5.8675 22.723 2.90333 24.1664 2.5C15.833 2.5 14.9997 8.33333 14.9997 8.33333C14.9997 8.33333 12.4997 6.66667 12.4997 2.5C9.99968 4.16667 8.33301 5.83333 8.33301 10C8.33301 12.5 9.16634 14.1667 9.16634 14.1667L27.4997 38.3333H33.333C33.333 35.8333 31.6664 34.1667 31.6664 34.1667C34.1664 34.1667 36.6664 35.8333 36.6664 35.8333C36.6664 30 34.1664 26.6667 34.1664 26.6667C37.4997 26.6667 39.9997 28.3333 39.9997 28.3333C39.9997 21.6667 34.1664 18.3333 34.1664 18.3333Z" fill="#FBC02D"/>
                        <path d="M33.3468 23.3333C33.3468 28.5417 29.1801 33.3333 29.1801 33.3333V38.2333L15.8468 38.3333C15.8468 38.3333 15.8468 36.6667 15.8468 35C15.8468 35 7.53847 35 3.8968 33.3333C3.88847 33.3333 3.88847 33.325 3.88013 33.325L3.3468 31.6667H2.51347C2.2718 31.6667 0.846802 29.1667 0.846802 26.6667V25.8333C0.846802 25 1.4468 25 1.68014 25H6.68013V18.3333C6.68013 18.3333 5.1218 17.5833 5.01347 16.6667C5.01347 16.6667 5.78847 15.15 6.88847 14.1667C10.7468 10.7333 15.0135 10 20.0135 10C28.3468 10 33.3468 16.6667 33.3468 23.3333Z" fill="#673AB7"/>
                        <path d="M0.847189 26.6667C0.847189 26.6667 1.69438 25.46 1.69438 25C1.69438 24.54 1.31484 24.1667 0.847189 24.1667C0.379541 24.1667 0 24.5833 0 25.1042C0 26.1458 0.847189 26.6667 0.847189 26.6667Z" fill="#673AB7"/>
                        <path d="M11.6671 24.1667V15.8333L8.33378 16.6667L6.66711 19.1667C6.66711 19.1667 8.33378 19.3108 8.33378 20.8333C8.33378 21.6667 8.33378 24.1667 8.33378 24.1667H11.6671Z" fill="#512DA8"/>
                        <path d="M14.6194 26.6666H10.0002C10.0002 26.6666 10.0002 25.1375 10.0002 24.8191C10.0002 24.0833 10.0002 22.6816 10.0002 20.8333C10.0002 15.8333 15.8336 15.8333 15.8336 22.5C15.8336 25.8333 14.6194 26.6666 14.6194 26.6666Z" fill="white"/>
                        <path d="M11.5669 24.1667C12.5419 24.1667 13.3336 23.0467 13.3336 21.6667C13.3336 20.2867 12.5419 19.1667 11.5669 19.1667C10.2086 19.1667 10.0502 20.5167 10.0419 20.6467C10.0169 20.9567 10.0002 21.2967 10.0002 21.6667C10.0002 22.0367 10.0169 22.3667 10.0336 22.6667C10.0336 22.6667 10.1044 24.1667 11.5669 24.1667Z" fill="#AB47BC"/>
                        <path d="M11.6946 21.6667C11.6946 22.5892 11.271 23.3333 10.7458 23.3333C10.4577 23.3333 10.0002 23.0558 10.0002 21.6667C10.0002 20.2775 10.4662 20 10.7458 20C11.271 20 11.6946 20.7442 11.6946 21.6667Z" fill="black"/>
                        <path d="M12.5138 19.1667C12.2891 19.1667 12.0736 19.2545 11.9148 19.4107C11.7559 19.567 11.6666 19.779 11.6666 20C11.6666 20.221 11.7559 20.433 11.9148 20.5892C12.0736 20.7455 12.2891 20.8333 12.5138 20.8333C12.7385 20.8333 12.954 20.7455 13.1129 20.5892C13.2717 20.433 13.361 20.221 13.361 20C13.361 19.779 13.2717 19.567 13.1129 19.4107C12.954 19.2545 12.7385 19.1667 12.5138 19.1667Z" fill="white"/>
                        <path d="M27.9169 20C27.5853 20 27.2674 20.1756 27.033 20.4882C26.7986 20.8007 26.6669 21.2246 26.6669 21.6667C26.6669 22.1087 26.7986 22.5326 27.033 22.8452C27.2674 23.1577 27.5853 23.3333 27.9169 23.3333C28.2484 23.3333 28.5663 23.1577 28.8007 22.8452C29.0352 22.5326 29.1669 22.1087 29.1669 21.6667C29.1669 21.2246 29.0352 20.8007 28.8007 20.4882C28.5663 20.1756 28.2484 20 27.9169 20ZM30.8335 22.5C30.0002 22.5 30.0002 23.2292 30.0002 23.5417C30.0002 23.9583 30.6252 25 30.8335 25C31.0419 25 31.6669 24.0625 31.6669 23.5417C31.6669 23.2292 31.6669 22.5 30.8335 22.5ZM28.3335 25C27.5002 25 27.5002 25.7292 27.5002 26.0417C27.5002 26.4583 28.1252 27.5 28.3335 27.5C28.5419 27.5 29.1669 26.5625 29.1669 26.0417C29.1669 25.7292 29.1669 25 28.3335 25Z" fill="#512DA8"/>
                        <path d="M19.1944 23.3333C15.861 23.3333 15.0277 25.8333 12.5277 25.8333C10.4443 25.8333 10.0277 24.4792 10.0277 24.1667C9.32434 24.1667 8.36101 24.1667 8.36101 24.1667C8.36101 24.1667 8.36101 24.1667 6.69434 23.3333C6.69434 23.3333 4.19434 25 1.69434 25C1.69434 25 5.02767 28.3334 11.6943 28.3334C15.0277 28.3334 16.6944 26.6667 16.6944 26.6667C17.3044 27.1508 18.1319 27.5 19.1944 27.5C21.0352 27.5 22.5277 26.5675 22.5277 25.4167C22.5277 24.2658 21.0352 23.3333 19.1944 23.3333Z" fill="#764EBE"/>
                        <path d="M18.3331 30V31.6667C17.3081 31.6667 16.3748 31.4667 15.6248 31.1084C12.0498 33.0584 7.84146 33.3334 4.16646 33.3334H3.88313C3.8748 33.3334 3.8748 33.325 3.86646 33.325L3.33313 31.6667H4.16646C7.94146 31.6667 11.8915 31.4 15.1998 29.4334L15.6498 29.1667L16.0831 29.4584C16.6081 29.8 17.4248 30 18.3331 30ZM25.8331 31.6667C25.8331 31.6667 24.9998 35 19.1665 35V36.6667C19.9998 36.6667 25.8331 36.6667 25.8331 31.6667Z" fill="#4A148C"/>
                        <path d="M15.8331 35H19.1665V38.3333H15.8331V35Z" fill="#FBC02D"/>
                        <path d="M15.8331 35H19.1665V36.6666H15.8331V35Z" fill="#FF8F00"/>
                        <path d="M12.6334 17.5C10.0275 17.5 10.0742 19.1666 6.69421 19.1666C6.69421 19.1666 9.04171 15 12.4217 15C16.6475 15 20.0275 14.1666 20.0275 14.1666C20.0275 14.1666 19.1942 17.5 16.6942 17.5C15.6492 17.5 14.1734 17.5 12.6334 17.5Z" fill="#311B92"/>
                        <path d="M19.9999 14.1666C19.9999 14.1666 18.3332 15.8333 13.3332 15.8333C11.6665 15.8333 10.9465 16.3141 10.1207 16.85C9.11988 17.5 7.93404 19.1666 6.66654 19.1666C5.92738 19.1666 4.99988 17.7083 4.99988 16.6833C5.83321 16.6833 6.71404 16.0125 7.29154 15.5208C8.51405 14.4791 9.99988 13.3333 12.4999 13.3333C16.6665 13.3333 19.9999 14.1666 19.9999 14.1666Z" fill="#7E57C2"/>
                        <path d="M40 0.0330419C39.675 0.0663753 38.5917 0.566375 37.4917 1.55804C37.425 1.61638 37.3584 1.67471 37.3 1.74138C36.95 2.07471 36.6 2.46638 36.275 2.91638C36.25 2.94971 36.225 2.98304 36.2084 3.01638C35.9 3.44138 35.6334 3.92471 35.4084 4.45804C35.2917 4.73304 35.1917 5.02471 35.1084 5.32471C35.0417 5.56638 34.9834 5.82471 34.95 6.08304C34.9167 6.19971 34.9 6.31638 34.8917 6.44971C34.8667 6.68304 34.85 6.84971 34.825 6.98305C34.7584 7.59138 34.7834 7.39971 34.6167 8.79138L34.5667 9.23305C34.55 9.40805 34.5167 9.60805 34.4667 9.84971C34.4334 10.0247 34.3917 10.2247 34.3334 10.433C34.2417 10.7497 34.1334 11.0914 33.975 11.4664C33.75 12.0164 33.4417 12.6164 33.0084 13.2414C32.825 13.5164 32.625 13.7914 32.3834 14.0747C32.1584 14.3497 31.9 14.6247 31.6167 14.8997C31.4 15.1164 31.1667 15.333 30.9167 15.5414C30.1834 16.1664 29.3001 16.783 28.2417 17.358C27.9917 17.4997 26.9417 17.6997 25.3417 17.033C22.9417 16.0247 21.7251 14.1664 21.6751 12.7664C21.6501 12.4414 21.6917 12.183 21.7917 11.958C22.0001 11.3664 22.7251 10.783 22.9167 10.633C23.1751 10.433 23.4001 10.2747 23.6417 10.1164C23.7001 10.0664 23.7584 10.0247 23.8251 9.98305C23.8417 9.96638 23.8667 9.94971 23.8917 9.93305C24.0251 9.84138 24.4917 9.54971 25.1001 9.18305H25.1084C25.8667 8.71638 26.8417 8.14971 27.5667 7.69971C27.5751 7.69138 27.5917 7.68305 27.6001 7.68305C28.1251 7.37471 28.5167 7.12471 28.6167 7.04971C28.6834 6.99138 28.7417 6.94971 28.8084 6.89971C28.8667 6.84971 28.9251 6.79971 28.9751 6.74971C29.3834 6.37471 29.6917 6.00804 29.9417 5.65804V5.63304C30.2001 5.25804 30.3917 4.89971 30.5584 4.54138C30.6167 4.41638 30.6751 4.29138 30.7334 4.16638C30.9251 3.78304 31.1084 3.40804 31.3751 3.03304C31.4667 2.89971 31.5751 2.75804 31.7001 2.62471C31.8834 2.39971 32.1 2.18304 32.3667 1.96638C32.475 1.88304 32.5917 1.79971 32.7167 1.70804C33.0834 1.44138 33.4584 1.22471 33.8584 1.03304C33.8834 1.02471 33.9084 1.01638 33.925 0.999709C34.0667 0.933042 34.2084 0.874709 34.3584 0.824709C34.65 0.699709 34.95 0.599709 35.25 0.508042C35.4917 0.433042 35.7334 0.374709 35.9834 0.316375C36.675 0.166375 37.3834 0.0747086 38.0834 0.0330419C38.7417 -0.0169581 39.375 -0.00862475 40 0.0330419Z" fill="#FF8F00"/>
                        <path d="M32.3835 14.075C32.1585 14.35 31.9002 14.625 31.6168 14.9C31.4002 15.1167 31.1668 15.3333 30.9168 15.5417C26.6168 14.7417 24.4002 12.35 23.6418 10.1167C23.7002 10.0667 23.7585 10.025 23.8252 9.98332C23.8418 9.96665 23.8668 9.94998 23.8918 9.93332C24.0252 9.84165 24.4918 9.54999 25.1002 9.18332C25.5668 11.1917 27.6918 13.5917 32.3835 14.075ZM34.4668 9.84998C34.4335 10.025 34.3918 10.225 34.3335 10.4333C34.2418 10.75 34.1335 11.0917 33.9751 11.4667C30.6668 10.9583 28.6502 9.48332 27.6002 7.68332C28.1252 7.37498 28.5168 7.12498 28.6168 7.04998C28.6835 6.99165 28.7418 6.94998 28.8085 6.89998C28.8668 6.84998 28.9252 6.79998 28.9752 6.74998C29.9002 8.39998 31.8002 9.48332 34.4668 9.84998ZM35.1085 5.32498C35.0418 5.56665 34.9835 5.82498 34.9501 6.08332C34.9168 6.19998 34.9001 6.31665 34.8918 6.44998C34.8668 6.68332 34.8501 6.84998 34.8251 6.98332C32.9585 6.39165 31.6335 5.33332 30.7335 4.16665C30.9252 3.78332 31.1085 3.40832 31.3752 3.03332C31.4668 2.89998 31.5752 2.75832 31.7002 2.62498C32.3418 3.65832 33.4001 4.71665 35.1085 5.32498ZM37.3001 1.74165C36.9501 2.07498 36.6001 2.46665 36.2751 2.91665C36.2501 2.94998 36.2251 2.98332 36.2085 3.01665C35.4001 2.42498 34.8001 1.65832 34.3585 0.824984C34.6501 0.699984 34.9501 0.599984 35.2501 0.508317C35.4918 0.433317 35.7335 0.374984 35.9835 0.31665C36.3001 0.849984 36.7335 1.34998 37.3001 1.74165Z" fill="#FF6F00"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_8">
                            <rect width="40" height="40" rx="10" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

            </Button>
            {/*<Button*/}
            {/*    className={styles.avatar}*/}
            {/*>*/}
            {/*    <svg*/}
            {/*        width="40"*/}
            {/*        height="40"*/}
            {/*        viewBox="0 0 40 40"*/}
            {/*        fill="none"*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*    >*/}
            {/*        <g clip-path="url(#clip0_2_8)">*/}
            {/*            <path*/}
            {/*                d="M34.1664 18.3333C34.1664 18.3333 35.833 17.5 39.9997 17.5C37.4997 10.8333 31.2247 10.5642 31.2247 10.5642L30.4089 10.4667L32.4997 4.16667C24.1664 4.16667 21.6664 7.5 21.6664 7.5C21.8622 5.8675 22.723 2.90333 24.1664 2.5C15.833 2.5 14.9997 8.33333 14.9997 8.33333C14.9997 8.33333 12.4997 6.66667 12.4997 2.5C9.99968 4.16667 8.33301 5.83333 8.33301 10C8.33301 12.5 9.16634 14.1667 9.16634 14.1667L27.4997 38.3333H33.333C33.333 35.8333 31.6664 34.1667 31.6664 34.1667C34.1664 34.1667 36.6664 35.8333 36.6664 35.8333C36.6664 30 34.1664 26.6667 34.1664 26.6667C37.4997 26.6667 39.9997 28.3333 39.9997 28.3333C39.9997 21.6667 34.1664 18.3333 34.1664 18.3333Z"*/}
            {/*                fill="#FBC02D"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M33.3468 23.3333C33.3468 28.5417 29.1801 33.3333 29.1801 33.3333V38.2333L15.8468 38.3333C15.8468 38.3333 15.8468 36.6667 15.8468 35C15.8468 35 7.53847 35 3.8968 33.3333C3.88847 33.3333 3.88847 33.325 3.88013 33.325L3.3468 31.6667H2.51347C2.2718 31.6667 0.846802 29.1667 0.846802 26.6667V25.8333C0.846802 25 1.4468 25 1.68014 25H6.68013V18.3333C6.68013 18.3333 5.1218 17.5833 5.01347 16.6667C5.01347 16.6667 5.78847 15.15 6.88847 14.1667C10.7468 10.7333 15.0135 10 20.0135 10C28.3468 10 33.3468 16.6667 33.3468 23.3333Z"*/}
            {/*                fill="#673AB7"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M0.847189 26.6667C0.847189 26.6667 1.69438 25.46 1.69438 25C1.69438 24.54 1.31484 24.1667 0.847189 24.1667C0.379541 24.1667 0 24.5833 0 25.1042C0 26.1458 0.847189 26.6667 0.847189 26.6667Z"*/}
            {/*                fill="#673AB7"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M11.6671 24.1667V15.8333L8.33378 16.6667L6.66711 19.1667C6.66711 19.1667 8.33378 19.3108 8.33378 20.8333C8.33378 21.6667 8.33378 24.1667 8.33378 24.1667H11.6671Z"*/}
            {/*                fill="#512DA8"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M14.6194 26.6666H10.0002C10.0002 26.6666 10.0002 25.1375 10.0002 24.8191C10.0002 24.0833 10.0002 22.6816 10.0002 20.8333C10.0002 15.8333 15.8336 15.8333 15.8336 22.5C15.8336 25.8333 14.6194 26.6666 14.6194 26.6666Z"*/}
            {/*                fill="white"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M11.5669 24.1667C12.5419 24.1667 13.3336 23.0467 13.3336 21.6667C13.3336 20.2867 12.5419 19.1667 11.5669 19.1667C10.2086 19.1667 10.0502 20.5167 10.0419 20.6467C10.0169 20.9567 10.0002 21.2967 10.0002 21.6667C10.0002 22.0367 10.0169 22.3667 10.0336 22.6667C10.0336 22.6667 10.1044 24.1667 11.5669 24.1667Z"*/}
            {/*                fill="#AB47BC"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M11.6946 21.6667C11.6946 22.5892 11.271 23.3333 10.7458 23.3333C10.4577 23.3333 10.0002 23.0558 10.0002 21.6667C10.0002 20.2775 10.4662 20 10.7458 20C11.271 20 11.6946 20.7442 11.6946 21.6667Z"*/}
            {/*                fill="black"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M12.5138 19.1667C12.2891 19.1667 12.0736 19.2545 11.9148 19.4107C11.7559 19.567 11.6666 19.779 11.6666 20C11.6666 20.221 11.7559 20.433 11.9148 20.5892C12.0736 20.7455 12.2891 20.8333 12.5138 20.8333C12.7385 20.8333 12.954 20.7455 13.1129 20.5892C13.2717 20.433 13.361 20.221 13.361 20C13.361 19.779 13.2717 19.567 13.1129 19.4107C12.954 19.2545 12.7385 19.1667 12.5138 19.1667Z"*/}
            {/*                fill="white"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M27.9169 20C27.5853 20 27.2674 20.1756 27.033 20.4882C26.7986 20.8007 26.6669 21.2246 26.6669 21.6667C26.6669 22.1087 26.7986 22.5326 27.033 22.8452C27.2674 23.1577 27.5853 23.3333 27.9169 23.3333C28.2484 23.3333 28.5663 23.1577 28.8007 22.8452C29.0352 22.5326 29.1669 22.1087 29.1669 21.6667C29.1669 21.2246 29.0352 20.8007 28.8007 20.4882C28.5663 20.1756 28.2484 20 27.9169 20ZM30.8335 22.5C30.0002 22.5 30.0002 23.2292 30.0002 23.5417C30.0002 23.9583 30.6252 25 30.8335 25C31.0419 25 31.6669 24.0625 31.6669 23.5417C31.6669 23.2292 31.6669 22.5 30.8335 22.5ZM28.3335 25C27.5002 25 27.5002 25.7292 27.5002 26.0417C27.5002 26.4583 28.1252 27.5 28.3335 27.5C28.5419 27.5 29.1669 26.5625 29.1669 26.0417C29.1669 25.7292 29.1669 25 28.3335 25Z"*/}
            {/*                fill="#512DA8"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M19.1944 23.3333C15.861 23.3333 15.0277 25.8333 12.5277 25.8333C10.4443 25.8333 10.0277 24.4792 10.0277 24.1667C9.32434 24.1667 8.36101 24.1667 8.36101 24.1667C8.36101 24.1667 8.36101 24.1667 6.69434 23.3333C6.69434 23.3333 4.19434 25 1.69434 25C1.69434 25 5.02767 28.3334 11.6943 28.3334C15.0277 28.3334 16.6944 26.6667 16.6944 26.6667C17.3044 27.1508 18.1319 27.5 19.1944 27.5C21.0352 27.5 22.5277 26.5675 22.5277 25.4167C22.5277 24.2658 21.0352 23.3333 19.1944 23.3333Z"*/}
            {/*                fill="#764EBE"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M18.3331 30V31.6667C17.3081 31.6667 16.3748 31.4667 15.6248 31.1084C12.0498 33.0584 7.84146 33.3334 4.16646 33.3334H3.88313C3.8748 33.3334 3.8748 33.325 3.86646 33.325L3.33313 31.6667H4.16646C7.94146 31.6667 11.8915 31.4 15.1998 29.4334L15.6498 29.1667L16.0831 29.4584C16.6081 29.8 17.4248 30 18.3331 30ZM25.8331 31.6667C25.8331 31.6667 24.9998 35 19.1665 35V36.6667C19.9998 36.6667 25.8331 36.6667 25.8331 31.6667Z"*/}
            {/*                fill="#4A148C"*/}
            {/*            />*/}
            {/*            <path d="M15.8331 35H19.1665V38.3333H15.8331V35Z" fill="#FBC02D" />*/}
            {/*            <path d="M15.8331 35H19.1665V36.6666H15.8331V35Z" fill="#FF8F00" />*/}
            {/*            <path*/}
            {/*                d="M12.6334 17.5C10.0275 17.5 10.0742 19.1666 6.69421 19.1666C6.69421 19.1666 9.04171 15 12.4217 15C16.6475 15 20.0275 14.1666 20.0275 14.1666C20.0275 14.1666 19.1942 17.5 16.6942 17.5C15.6492 17.5 14.1734 17.5 12.6334 17.5Z"*/}
            {/*                fill="#311B92"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M19.9999 14.1666C19.9999 14.1666 18.3332 15.8333 13.3332 15.8333C11.6665 15.8333 10.9465 16.3141 10.1207 16.85C9.11988 17.5 7.93404 19.1666 6.66654 19.1666C5.92738 19.1666 4.99988 17.7083 4.99988 16.6833C5.83321 16.6833 6.71404 16.0125 7.29154 15.5208C8.51405 14.4791 9.99988 13.3333 12.4999 13.3333C16.6665 13.3333 19.9999 14.1666 19.9999 14.1666Z"*/}
            {/*                fill="#7E57C2"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M40 0.0330419C39.675 0.0663753 38.5917 0.566375 37.4917 1.55804C37.425 1.61638 37.3584 1.67471 37.3 1.74138C36.95 2.07471 36.6 2.46638 36.275 2.91638C36.25 2.94971 36.225 2.98304 36.2084 3.01638C35.9 3.44138 35.6334 3.92471 35.4084 4.45804C35.2917 4.73304 35.1917 5.02471 35.1084 5.32471C35.0417 5.56638 34.9834 5.82471 34.95 6.08304C34.9167 6.19971 34.9 6.31638 34.8917 6.44971C34.8667 6.68304 34.85 6.84971 34.825 6.98305C34.7584 7.59138 34.7834 7.39971 34.6167 8.79138L34.5667 9.23305C34.55 9.40805 34.5167 9.60805 34.4667 9.84971C34.4334 10.0247 34.3917 10.2247 34.3334 10.433C34.2417 10.7497 34.1334 11.0914 33.975 11.4664C33.75 12.0164 33.4417 12.6164 33.0084 13.2414C32.825 13.5164 32.625 13.7914 32.3834 14.0747C32.1584 14.3497 31.9 14.6247 31.6167 14.8997C31.4 15.1164 31.1667 15.333 30.9167 15.5414C30.1834 16.1664 29.3001 16.783 28.2417 17.358C27.9917 17.4997 26.9417 17.6997 25.3417 17.033C22.9417 16.0247 21.7251 14.1664 21.6751 12.7664C21.6501 12.4414 21.6917 12.183 21.7917 11.958C22.0001 11.3664 22.7251 10.783 22.9167 10.633C23.1751 10.433 23.4001 10.2747 23.6417 10.1164C23.7001 10.0664 23.7584 10.0247 23.8251 9.98305C23.8417 9.96638 23.8667 9.94971 23.8917 9.93305C24.0251 9.84138 24.4917 9.54971 25.1001 9.18305H25.1084C25.8667 8.71638 26.8417 8.14971 27.5667 7.69971C27.5751 7.69138 27.5917 7.68305 27.6001 7.68305C28.1251 7.37471 28.5167 7.12471 28.6167 7.04971C28.6834 6.99138 28.7417 6.94971 28.8084 6.89971C28.8667 6.84971 28.9251 6.79971 28.9751 6.74971C29.3834 6.37471 29.6917 6.00804 29.9417 5.65804V5.63304C30.2001 5.25804 30.3917 4.89971 30.5584 4.54138C30.6167 4.41638 30.6751 4.29138 30.7334 4.16638C30.9251 3.78304 31.1084 3.40804 31.3751 3.03304C31.4667 2.89971 31.5751 2.75804 31.7001 2.62471C31.8834 2.39971 32.1 2.18304 32.3667 1.96638C32.475 1.88304 32.5917 1.79971 32.7167 1.70804C33.0834 1.44138 33.4584 1.22471 33.8584 1.03304C33.8834 1.02471 33.9084 1.01638 33.925 0.999709C34.0667 0.933042 34.2084 0.874709 34.3584 0.824709C34.65 0.699709 34.95 0.599709 35.25 0.508042C35.4917 0.433042 35.7334 0.374709 35.9834 0.316375C36.675 0.166375 37.3834 0.0747086 38.0834 0.0330419C38.7417 -0.0169581 39.375 -0.00862475 40 0.0330419Z"*/}
            {/*                fill="#FF8F00"*/}
            {/*            />*/}
            {/*            <path*/}
            {/*                d="M32.3835 14.075C32.1585 14.35 31.9002 14.625 31.6168 14.9C31.4002 15.1167 31.1668 15.3333 30.9168 15.5417C26.6168 14.7417 24.4002 12.35 23.6418 10.1167C23.7002 10.0667 23.7585 10.025 23.8252 9.98332C23.8418 9.96665 23.8668 9.94998 23.8918 9.93332C24.0252 9.84165 24.4918 9.54999 25.1002 9.18332C25.5668 11.1917 27.6918 13.5917 32.3835 14.075ZM34.4668 9.84998C34.4335 10.025 34.3918 10.225 34.3335 10.4333C34.2418 10.75 34.1335 11.0917 33.9751 11.4667C30.6668 10.9583 28.6502 9.48332 27.6002 7.68332C28.1252 7.37498 28.5168 7.12498 28.6168 7.04998C28.6835 6.99165 28.7418 6.94998 28.8085 6.89998C28.8668 6.84998 28.9252 6.79998 28.9752 6.74998C29.9002 8.39998 31.8002 9.48332 34.4668 9.84998ZM35.1085 5.32498C35.0418 5.56665 34.9835 5.82498 34.9501 6.08332C34.9168 6.19998 34.9001 6.31665 34.8918 6.44998C34.8668 6.68332 34.8501 6.84998 34.8251 6.98332C32.9585 6.39165 31.6335 5.33332 30.7335 4.16665C30.9252 3.78332 31.1085 3.40832 31.3752 3.03332C31.4668 2.89998 31.5752 2.75832 31.7002 2.62498C32.3418 3.65832 33.4001 4.71665 35.1085 5.32498ZM37.3001 1.74165C36.9501 2.07498 36.6001 2.46665 36.2751 2.91665C36.2501 2.94998 36.2251 2.98332 36.2085 3.01665C35.4001 2.42498 34.8001 1.65832 34.3585 0.824984C34.6501 0.699984 34.9501 0.599984 35.2501 0.508317C35.4918 0.433317 35.7335 0.374984 35.9835 0.31665C36.3001 0.849984 36.7335 1.34998 37.3001 1.74165Z"*/}
            {/*                fill="#FF6F00"*/}
            {/*            />*/}
            {/*        </g>*/}
            {/*        <defs>*/}
            {/*            <clipPath id="clip0_2_8">*/}
            {/*                <rect width="40" height="40" rx="10" fill="white" />*/}
            {/*            </clipPath>*/}
            {/*        </defs>*/}
            {/*    </svg>*/}
            {/*</Button>*/}
        </Dropdown>
    )
}

export default Avatar