import React, { useState, useEffect } from "react";
import { useTranslate } from "react-admin";
import CardService from "../custom/CardService";
import CardEquipment from "../custom/CardEquipment";
import CustomButton from "../custom/CustomButton";
import { useLayout } from "../custom/GridView";
import RecordRef from "../custom/RecordRef";
import { useForm } from "react-final-form";
import PropTypes from "prop-types";

const Blank = () => (
    <span>

    </span>
);

const generateId = () => `${new Date().getTime() * Math.random()}`

/**
 * This component show buttons to create CardEquipment and CardService
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to create a Purchase Forecast
 */

const PurchaseEntities = props => {
    const classes = useLayout();
    const translate = useTranslate();
    const { source } = props;
    const form = useForm();
    const [
        cards,
        setCards
    ] = useState({});
    const [
        datas,
        setDatas
    ] = useState({});
    const [
        deleting,
        setDelete
    ] = useState(false);
    const [
        adding,
        setAdd
    ] = useState(false);
    const [
        init,
        setInit
    ] = useState(false);

    useEffect(() => {
        form.change(source, Object.values(datas).filter(data => Boolean(data)))
    }, [datas])

    useEffect(() => {
        if (deleting) {
            /* eslint-disable */
            setCards({
                ...cards,
                [deleting]: undefined
            });
            setDatas({
                ...datas,
                [deleting]: undefined
            });
            setDelete(false)
            /* eslint-enable */
        }
    }, [deleting])

    useEffect(() => {
        if (adding) {
            /* eslint-disable */
            const [key, data] = adding;

            setDatas({
                ...datas,
                [key]: data
            });
            setAdd(false);
            /* eslint-enable */
        }
    }, [adding])

    const handleChangeCard = (index, dataCard) => {
        setAdd([
            index,
            dataCard
        ]);
    }

    const handleDelete = index => setDelete(index)

    const addCard = type => {
        const newId = generateId();

        let newCard = null;

        if (type === "equipment") {
            newCard = <CardEquipment
                key={newId}
                index={newId}
                onDelete={handleDelete}
                onChange={handleChangeCard} />
        } else {
            newCard = <CardService
            key={newId}
            index={newId}
            onDelete={handleDelete}
            onChange={handleChangeCard} />
        }

        setCards({
            ...cards,
            [newId]: newCard
        });
    }

    useEffect(() => {
            if (!init) {
                const eqId = generateId();
                const svId = generateId();

                setCards({
                    [eqId]: <CardEquipment
                        key={eqId}
                        index={eqId}
                        onDelete={id => handleDelete(id)}
                        onChange={handleChangeCard} />,
                    [svId]: <CardService
                        key={svId}
                        index={svId}
                        onDelete={id => handleDelete(id)}
                        onChange={handleChangeCard} />
                });
                setInit(true);
            }
        }, []
    )

    return (
        <RecordRef className={classes.gridChild}>
            <CustomButton
                onClick={() => addCard("equipment")}
                name={translate("esop.supportpurchase.buttonEquipment")}
            />
            <CustomButton
                onClick={() => addCard("service")}
                name={translate("esop.supportpurchase.buttonService")}
            />
            <Blank />
            {Object.values(cards)}
        </RecordRef>
    )
}

PurchaseEntities.propTypes = {
    source: PropTypes.string
}

export default PurchaseEntities;
