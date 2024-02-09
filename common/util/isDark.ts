export default function isDark(color?: string) {
    const darkColors = ['939598', '0098ce', '233e99', '6600cc', '978fc5', 'dd0031', 'ff5f00', '66cc33'];
    return !!color && darkColors.indexOf(color.replace('#', '')) > -1;
}