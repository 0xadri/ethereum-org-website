import React from "react"
import { Box, VisuallyHiddenInput, Text } from "@chakra-ui/react"

export interface IProps {
  children?: React.ReactNode
  callback?: () => void
  checked: boolean
  className?: string
  size?: number
}

const Checkbox: React.FC<IProps> = ({
  callback,
  checked,
  children,
  className,
  size = 2,
  ...rest
}) => {
  const handleClick = () => {
    if (callback) {
      callback()
    }
  }

  const checkboxContainerAttributes = {
    display: "inline-block",
    verticalAlign: "middle",
    className: className,
    onClick: handleClick,
  }

  const hiddenCheckboxAttributes = {
    type: "checkbox",
    checked: checked,
    readOnly: true,
    ...rest,
  }

  const styledCheckboxAttributes = {
    "aria-hidden": true,
    className: "styled-checkbox",
    display: "inline-block",
    w: `${size}rem`,
    h: `${size}rem`,
    minW: `${size}rem`,
    bg: `${checked ? "primary400" : "background"}`,
    border: "px",
    borderStyle: "solid",
    borderColor: "black50",
    borderRadius: "3px",
    transition: "all 150ms",
    _hover: {
      boxShadow: "tableItemBoxShadow",
      border: "px",
      borderStyle: "solid",
      borderColor: "primary600",
      transition: "transform 0.1s",
      transform: "scale(1.02)",
    },
  }

  return (
    <Box {...checkboxContainerAttributes}>
      <VisuallyHiddenInput {...hiddenCheckboxAttributes} />
      <Box {...styledCheckboxAttributes}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={0.5}
          visibility={`${checked ? "visible" : "hidden"}`}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </Box>
      {children && (
        <Text as="span" ml={2}>
          {children}
        </Text>
      )}
    </Box>
  )
}

export default Checkbox
