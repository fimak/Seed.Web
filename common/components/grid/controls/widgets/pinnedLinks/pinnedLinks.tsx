import Rte from "@components/grid/controls/rte";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import Link from "next/link";
import styles from "./pinnedLinks.module.scss";
import WidgetWrapper from "../widgetWrapper";
import Image from "next/image";

export default function PinnedLinks(model: WidgetModel) {
  return (
    <WidgetWrapper model={model} styles={styles}>
      <nav>
        {model.content.links.map((link: NodeJS.Dict<any>) => (
          <Link href={link.url} key={link.label}>
            <Image
              src={`/media/icons/${link.icon}.svg`}
              alt={link.icon}
              width={18}
              height={18}
            />
            <Rte text={link.label} className={styles.text} />
          </Link>
        ))}
      </nav>
    </WidgetWrapper>
  );
}
