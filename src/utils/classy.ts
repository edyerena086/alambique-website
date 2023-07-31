const classy = ( styles: string[] ) : string => {
  const classes = styles.filter(item => item.trim() !== '')

  return classes.join(' ')
}

export default classy
