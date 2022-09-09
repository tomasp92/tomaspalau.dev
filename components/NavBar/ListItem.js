import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Link from 'next/link'

export default function LinkedListItem({icon, text,to}) {
    return(
        <>
            <Link href={to}>
                <a>
                    <ListItem>
                        <ListItemAvatar className="listItem">
                            <Avatar>
                                {icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={text} />
                    </ListItem>
                </a>
            </Link>
        </>
    )
}